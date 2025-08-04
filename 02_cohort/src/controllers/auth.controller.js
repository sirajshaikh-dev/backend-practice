const register = async (req, res) => {
  res.send("user registered");
};
const login = async (req, res) => {
  res.send("user login success");
};
const logout = async (req, res) => {
  res.send("user logged out");
};

export { register, login, logout };
