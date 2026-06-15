import type { SectionTitleProps } from "../../../types/SectionTitleProps";
import "./HomeTitle.css"

const HomeTitle = ({ text }: SectionTitleProps) => {
    return (
        <div className="SectionTitle">
            <h2>{text}</h2>
        </div>
    );
};

export default HomeTitle;