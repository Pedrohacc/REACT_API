const jwt = require('jsonwebtoken');

// Middleware para verificar o token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization'); 
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), 'chave_secreta');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
};

// Rota protegida que usa o middleware para verificar o token
app.get('/api/validate', verifyToken, (req, res) => {
  // O usuário foi verificado com sucesso
  res.json({ message: 'Acesso permitido', user: req.user });
});
