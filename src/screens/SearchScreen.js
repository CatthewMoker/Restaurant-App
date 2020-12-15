import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, ImagePropTypes } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

//Uses Vector Icons screen from expo cli
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();



    const filterResultsByPrice = (price) => {
        // === '$'|| '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    // Call searchAPI when component
    // is first rendered. BAD CODE!
    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta');
    }, [])

    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective" />
                <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier" />
                <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;