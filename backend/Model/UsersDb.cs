using System.Collections.Generic;
using System.IO;


namespace backend.model{
    public class UsersDb{

        public UsersDb()
        {
            _mapuserToDb = new Dictionary<string,UserDb>();
        }

        public string BaseDir {
            get{
                var dir = Directory.GetCurrentDirectory();
                return Path.Combine(dir,"database");
            }
        }

        public IEnumerable<string> Users{
            get{
                var dirs = Directory.GetDirectories(this.BaseDir);
                return dirs;
            }
        }

        public void AddUser(string username){
            var dir = Path.Combine(this.BaseDir,username);
            Directory.CreateDirectory(dir);
        }
        
        Dictionary<string,UserDb> _mapuserToDb;
        public UserDb GetUser(string username)
        {
            if(_mapuserToDb.ContainsKey(username))
                return _mapuserToDb[username];

            string userdir = Path.Combine(BaseDir,username);
            var userdb = new UserDb(username,userdir);
            _mapuserToDb[username]=userdb;
            return userdb;

        }

    }

}