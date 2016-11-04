using System;
using System.Collections.Generic;
using System.IO;


namespace backend.model{
    public class UsersDb{

        private static UsersDb instance;
        public static UsersDb Instance {
            get{
                if(instance == null)
                instance = new UsersDb();
                return instance;
            }
        }
        protected UsersDb()
        {            
            var dir = Path.GetDirectoryName(Directory.GetCurrentDirectory());
            _basedir = Path.Combine(dir,"todoangulardotnetcoredb");
            _mapuserToDb = new Dictionary<string,UserDb>();
        }

        private string _basedir;

        public string BaseDir {
            get{                                
                return _basedir;
            }
        }

        public IEnumerable<string> Users{

            get{
                var users = new List<string>();
                var dirs = Directory.GetDirectories(this.BaseDir);
                foreach(var dir in dirs)
                    {
                        var di = new DirectoryInfo(dir);
                        users.Add(di.Name);
                    }
                return users;
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