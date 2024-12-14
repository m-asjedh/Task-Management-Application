"use client";

interface DateTabProps {
  buttonBgColour: string;
  dateText: string;
}

const DateTab = ({ buttonBgColour, dateText }: DateTabProps) => {
  return (
    <div>
      <div className={`px-1 text-[10px] rounded-md ${buttonBgColour}`}>
        {dateText}
      </div>
    </div>
  );
};

export default DateTab;
