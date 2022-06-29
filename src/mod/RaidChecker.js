module.exports = {
    name: 'raidcherker',
    async execute(client, member) {
        const joinDataFolder = "data/joins/" + interaction.guildId;
        //if folder does not exist, create it
        if (!fs.existsSync(joinDataFolder)) {
            fs.mkdirSync(joinDataFolder);
            //create file for guild
            fs.createWriteStream(`${joinDataFolder}/Current.json`);
        }
        //read current file
        const currentFile = fs.readFileSync(`${joinDataFolder}/Current.json`);
        const currentData = JSON.parse(currentFile);
        if (currentData.RaidMode === false) {
            //add member to current file
            membersArray = currentData.membersArray;
            currentDate = new Date();
            //expire date is current date + 10 min
            expireDate = new Date(currentDate.getTime() + 600000);
            user = {
                raid: false,
                id: member.id,
                name: member.user.username,
                joined: currentDate,
                expireDate: expireDate

            }
            membersArray.push(user);
        }
        else
        {
            //add member to current file
            membersArray = currentData.membersArray;
            currentDate = new Date();
            //expire date is current date + 1 day
            expireDate = new Date(currentDate.getTime() + 86400000);
            user = {
                raid: true,
                id: member.id,
                name: member.user.username,
                joined: currentDate,
                expireDate: expireDate
            }
            membersArray.push(user);
        }
        //write current file
        fs.writeFileSync(`${joinDataFolder}/Current.json`, JSON.stringify(currentData, null, 2));
    }
}