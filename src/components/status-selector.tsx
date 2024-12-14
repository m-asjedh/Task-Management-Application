const statusOptions = [
  { label: "Todo", color: "border-yellow-500" },
  { label: "Progress", color: "border-blue-500" },
  { label: "Completed", color: "border-green-500" },
];

const StatusSelector = ({
  status,
  onChangeStatus,
}: {
  status: string;
  onChangeStatus: (newStatus: string) => void;
}) => {
  const currentStatus = statusOptions.find((option) => option.label === status);

  return (
    <div className="flex space-x-16 items-center">
      <div className="flex space-x-4 justify-start items-center">
        <div className="w-3 h-3 bg-white rounded-full border border-gray-500"></div>
        <div className="text-[14px] text-gray-500">Status</div>
      </div>
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => {
          const currentIndex = statusOptions.findIndex(
            (option) => option.label === status
          );
          const nextIndex = (currentIndex + 1) % statusOptions.length;
          onChangeStatus(statusOptions[nextIndex].label);
        }}
      >
        {currentStatus && (
          <>
            <div
              className={`w-3 h-3 bg-white rounded-full border ${currentStatus.color}`}
            ></div>
            <div className="text-[14px]">{currentStatus.label}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusSelector;
