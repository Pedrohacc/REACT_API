app.post('/api/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao fazer logout' });
      } else {
        res.status(200).json({ message: 'Logout bem-sucedido' });
      }
    });
  });