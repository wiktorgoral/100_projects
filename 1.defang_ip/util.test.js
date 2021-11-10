const { defang } = require('./main');


test("Random IPs", () => {
    let ip = ['25.67.73.107',
        '7.230.51.166',
        '61.163.180.70',
        '252.67.191.140',
        '83.232.249.36',
        '20.131.35.118',
        '205.234.69.21',
        '27.160.117.133',
        '246.97.58.64',
        '148.165.134.242']

    let expected = ['25[.]67[.]73[.]107',
        '7[.]230[.]51[.]166',
        '61[.]163[.]180[.]70',
        '252[.]67[.]191[.]140',
        '83[.]232[.]249[.]36',
        '20[.]131[.]35[.]118',
        '205[.]234[.]69[.]21',
        '27[.]160[.]117[.]133',
        '246[.]97[.]58[.]64',
        '148[.]165[.]134[.]242']
    
    for (let i = 0; i < 10; i++) {
        const result = defang(ip[i]);
        expect(result).toBe(expected[i])

    }
})