const Avatar = ({ path }: { path: string }) => {
  return (
    <img
      alt=""
      src={path}
      className="w-16 h-16 rounded-lg object-cover shadow-sm hover:shadow-md transition-shadow"
    />
  );
};

export default Avatar;
