const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">로그인</h2>
        <div className="space-y-4">
          <div>
            <div className="block text-gray-700">아이디</div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-indigo-400"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div>
            <div className="block text-gray-700">비밀번호</div>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-indigo-400"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded hover:bg-teal-600  "
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
