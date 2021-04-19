import React, { memo } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import RE1 from '@/assets/img/re1.webp';
import RE2 from '@/assets/img/re2.webp';

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        css3={true}
        onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
        }}
        navigation={true}
        scrollingSpeed={500} /* Options here */
        render={({ state, fullpageApi }) => {
            console.log(fullpageApi)
            return (
                <ReactFullpage.Wrapper>
                    <div className="section" style={{ backgroundColor: "#000" }}>
                        <img src={RE1} alt=""/>
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className="section">
                        <img src={RE2} alt="" />
                        <p>Section 2</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);
export default memo(Fullpage);