import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

//Uses Vector Icons screen from expo cli
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    

    // Call searchAPI when component
    // is first rendered. BAD CODE!
    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta');
    }, [])

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList title="Cost Effective" />
            <ResultsList title="Bit Pricier" />
            <ResultsList title="Big Spender" />
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;