import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/charts';
import { WordCloudWrapper } from './style'

const DemoWordCloud: React.FC = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    var config = {
        data: data,
        wordField: 'name',
        weightField: 'value',
        colorField: 'name',
        padding:12,
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [8, 32],
            rotation: 0,
        },
        random: function random () {
            return 0.5;
        },
    };
    return (
        <WordCloudWrapper>
            <WordCloud {...config} />
        </WordCloudWrapper>
    )
};

export default DemoWordCloud;