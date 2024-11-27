const UserProfile = () => {
  return (
    <div className="p-4 sticky bottom-0 z-10 shadow-md space-y-4">
      <div className="flex items-center space-x-3">
        <img
          src="https://avatars.githubusercontent.com/u/19946599?v=4"
          alt="User"
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="text-gray-700 dark:text-white font-semibold ">
            Umesh Jogale
          </p>
          <p className="text-gray-500  dark:text-white text-sm">
            jogaleumesh@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
