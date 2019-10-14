var db = connect('weich');
var userList = db.user.find();
userList.forEach(function(user){
    printjson(user);
});