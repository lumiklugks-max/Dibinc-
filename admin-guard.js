// =====================================================================
// Dibincá - Proteção das páginas de administração
// Coloque aqui os e-mails de quem pode acessar o painel (sua mãe, padrasto, você).
// =====================================================================
const DIBINCA_ADMINS = [
    'email.da.sua.mae@gmail.com',
    'email.do.padrasto@gmail.com'
];

(function () {
    const usuario = JSON.parse(localStorage.getItem('dibinca_logged_user') || 'null');
    const email = usuario && usuario.email ? usuario.email.toLowerCase() : '';
    const ehAdmin = DIBINCA_ADMINS.map(e => e.toLowerCase()).includes(email);
    if (!ehAdmin) {
        alert('Acesso restrito à administração da Dibincá.');
        window.location.replace('login.html');
    }
})();
