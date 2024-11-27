const AccountInfo = () => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg space-y-2">
      <div className="flex justify-between items-center bg-white rounded-lg p-2">
        <span className="text-sm text-gray-500">Account:</span>
        <div className="flex items-center space-x-1">
          <span className="text-sm  text-gray-900">9999999</span>
        </div>
      </div>

      <div className="flex justify-between items-center bg-white rounded-lg p-2">
        <span className="text-sm text-gray-500">Status:</span>
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-900">Active</span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
      </div>

      <div className="flex justify-between items-center bg-white rounded-lg p-2">
        <span className="text-sm text-gray-500">Program:</span>
        <span className="text-sm text-gray-900">$50,000 Evl.</span>
      </div>
    </div>
  );
};

export default AccountInfo;
