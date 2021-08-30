import React from 'react'
import "./widget.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
        <div className="widgets_articleleft">
            <FiberManualRecordIcon className="dot" />
        </div>
        <div className="widgets_articleright">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>

    </div>
)


const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkdIn news</h2>
                <InfoIcon className="infoicon" />
            </div>
            {newsArticle("Make your next getaway feel longer", "2d ago - 1,336 Reader")}
            {newsArticle("Out of a job? Write this on CV", "6d ago - 3,345 readers")}
            {newsArticle("Jobs galore for cloud talent", "5d ago - 23,378 readers")}
            {newsArticle("IKEA has a new strategy", "7d ago - 1,355 readers")}
            {newsArticle("Salary hikes make a comeback", "1d ago - 38,745 readers")}
            {newsArticle("Jobs galore for cloud talent", "6d ago - 33,345 readers")}
        </div>
    )
}

export default Widgets
