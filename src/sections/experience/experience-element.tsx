import { Briefcase } from "lucide-react";
import { ExperienceElement as ExperienceElementType } from "@/reusables/types";

type Props = {
    experience: ExperienceElementType;
    index: number;
};

const ExperienceElement = ({ experience, index }: Props) => {
    return (
        <div className="relative flex w-full my-6">
            {/* DATE - On Opposite Side */}
            <div className={`absolute top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-semibold 
                ${index % 2 === 0 ? "left-[10%] text-left" : "right-[10%] text-right"}`}>
                {experience.date}
            </div>

            {/* ICON - Centered */}
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-400">
                <Briefcase className="text-gray-600" />
            </div>

            {/* EXPERIENCE BOX (Alternating Sides) */}
            <div className={`relative w-1/2 flex ${index % 2 === 0 ? "justify-end pr-12 text-right" : "justify-start pl-12 text-left"}`}>
                <div className="bg-white shadow-lg rounded-lg p-5 border w-[90%]">
                    <h3 className="text-lg font-bold">{experience.position}</h3>
                    <p className="text-sm font-semibold">{experience.organization}</p>
                    <p className="text-sm text-gray-600 mt-2">{experience.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceElement;
