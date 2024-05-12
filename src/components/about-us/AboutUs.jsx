import './AboutUs.css';
import iconOne from '../../assets/icons/icon-1.svg';
import iconTwo from '../../assets/icons/icon-2.svg';
import iconThird from '../../assets/icons/icon-3.svg';
import iconForth from '../../assets/icons/icon-4.svg';

import AboutUsCard from '../about-us-card/AboutUsCard';

const AboutUs = () => {
    const data = [
        {
            icon: iconOne,
            title: "First click tests",
            description: "While most people enjoy casino gambling",
        },
        {
            icon: iconTwo,
            title: "Design surveys",
            description: "Sports betting, lottery and bingo playing for the fun",
        },
        {
            icon: iconThird,
            title: "Preference tests",
            description: "The Myspace page defines the individual",
        },
        {
            icon: iconForth,
            title: "Five second tests",
            description: "Personal choices and the overall personality of the person.",
        },
    ];

    return (
        <div className="section-container">
            <h2 className="section-title about-us-section-title"> About us </h2>
            <div className='about-us-cards'>
                {/* --------- Varianta 3 ---------kind of FOR EACH  */}
                {data.map((element) => (
                    <AboutUsCard key={element.title} icon={element.icon} title={element.title} description={element.description} />
                ))}

                {/* --------- Varianta 2 ---------  */}
                {/* Props */}
                {/* <AboutUsCard icon={iconOne} title="First click tests" description="While most people enjoy casino gambling" />
                <AboutUsCard icon={iconTwo} title="Design surveys" description="Sports betting, lottery and bingo playing for the fun" />
                <AboutUsCard icon={iconThird} title="Preference tests" description="The Myspace page defines the individual." />
                <AboutUsCard icon={iconForth} title="Five second tests" description="Personal choices and the overall personality of the person." /> */}
                
                {/* ------- Varianta 1 ------ */}
                {/* <div>
                    <img src={iconOne} alt="icon" />
                    <h3> First click tests </h3>
                    <p>While most people enjoy casino gambling,</p>
                </div>
                <div>
                    <img src={iconTwo} alt="icon" />
                    <h3> Design surveys </h3>
                    <p>Sports betting, lottery and bingo playing for the fun</p>
                </div>
                <div>
                    <img src={iconThird} alt="icon" />
                    <h3> Preference tests </h3>
                    <p>The Myspace page defines the individual.</p>
                </div>
                <div>
                    <img src={iconForth} alt="icon" />
                    <h3> Five second tests </h3>
                    <p>Personal choices and the overall personality of the person. </p>
                </div> */}
            </div>
        </div>
    );
};

export default AboutUs;