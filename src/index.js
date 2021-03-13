module.exports = function check(str, bracketsConfig) {
    const config = bracketsConfig.map(br => br.join(''));
    let count = 0;
    while (count != bracketsConfig.length){
        count = 0;
        config.forEach(function(conf){
            if(str.includes(conf)){
                str = str.replace(conf, '');
            }else{
                count++;
            }
        });
    }
    if(str.length == 0){
        return true;
    }else {
        return false;
    }
}
