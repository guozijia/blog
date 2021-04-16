import React, { memo } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

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
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);
export default memo(Fullpage);