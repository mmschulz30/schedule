import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque sapien at nisi eleifend, a blandit urna dignissim. Curabitur neque lectus, gravida at ex sed, volutpat semper dui.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;