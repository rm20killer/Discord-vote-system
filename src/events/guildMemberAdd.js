
const RaidChecker = require(`../mod/RaidChecker`)
module.exports = {
    name: 'guildMemberAdd',
    async execute(client, member) {
        try{
            RaidChecker.execute(client, member)
        }catch(err){
            console.log(err)
            return;
        }
        return;
    }
}