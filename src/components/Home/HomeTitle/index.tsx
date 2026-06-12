import type { SectionTitleProps } from "../../../types/SectionTitleProps";

const HomeTitle = ({ text }: SectionTitleProps) => {
    return (
        <div className="SectionTitle">
            <h2>{text}</h2>
        </div>
    );
};

export default HomeTitle;