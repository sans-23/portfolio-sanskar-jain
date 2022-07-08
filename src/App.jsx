import React from 'react';
// import CurrentUser from './components/QuizApp/CurrentUser';
// import Header from './components/QuizApp/Header';
// import QuestionBar from './components/QuizApp/QuestionBar';
// import QuestionBox from './components/QuizApp/QuestionBox';
// import SidePanel from './components/QuizApp/SidePanel';
// import styles from './components/QuizApp/style.module.css'
import Home from './components/MainPage/Home'

export default function App(){
    return (
        <div>
             {/* <Header/>
             <div className={styles.main}>
                <div className={styles.overviewSection}>
                    <QuestionBar/>
                    <CurrentUser/>
                </div>
                <div className={styles.questionSection}>
                    <QuestionBox/>
                    <SidePanel/>
                </div>
            </div> */}
            <Home />
        </div>
        
    )
} 