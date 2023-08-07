import React from 'react';
import Section from './section/section';
import FeedBackOptions from './feedbackOptions/feedbackOptions';
import Statistics from './Statistics/statistics';
import Notifications from './Notification/notification'
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  onLeaveFeedback = option => {
    
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
      
    
    console.log('click');
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () =>{
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (this.state.good / total) * 100;
  }

  render() {
    return (
      <>
        <Section tittle={'Please leave feedback'}>
        <FeedBackOptions onLeaveFeedback={this.onLeaveFeedback} option={Object.keys(this.state)}></FeedBackOptions>
        </Section>
        

        <Section tittle={'Statistics'}>
        {this.countTotalFeedback() === 0 ? (

          <Notifications message="There is no feedback,sorry"/>
        ): (
    <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              countPercentage={this.countPositiveFeedbackPercentage()}
            />

        )}
        
       
        </Section>

      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
