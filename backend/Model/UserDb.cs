using System.Collections.Generic;
using System.IO;

namespace backend.model{

    public class UserDb{  

        string username;      
        string userdir;

        public UserDb(string user,string dir){            
            username = user;
            userdir = dir;
            backlog = new ItemsDb(Path.Combine(userdir,"backlog.txt"));
            progress = new ItemsDb(Path.Combine(userdir,"progress.txt"));
            done = new ItemsDb(Path.Combine(userdir,"done.txt"));
        }

        ItemsDb backlog;
        ItemsDb progress;
        ItemsDb done;

        public IEnumerable<TodoItem> Backlog {
            get{
                return done.Items;
            }
        }

        public IEnumerable<TodoItem> Progress {
            get{
                return done.Items;
            }
        }

        public IEnumerable<TodoItem> Completed{
            get{
                return done.Items;
            }
        }

        //all methods for backlog management

        public void AddItem(string desc,string datetime){
            var item = new TodoItem();
            item.Desc = desc;
            item.Guid = System.Guid.NewGuid().ToString();
            item.CreationTime = datetime;
            item.CompletionTime="";
            backlog.AddItem(item);
        }

        public void ToProgress(string guid){
            
            var item = backlog.GetItem(guid);
            if(item == null) return;

            progress.AddItem(item);
            backlog.Remove(item.Guid);

        }

        public void ToDone(string guid,string datetime){
            
            var item = progress.GetItem(guid);
            if(item == null) return;

            done.AddItem(item);
            progress.Remove(item.Guid);
        }

        public void ArrangeBacklog(string guid,string guidref){

           //000 - move to Top
           //111 - move to bottom
           if(guidref.StartsWith("000"))
           {
                backlog.MoveItemToTop(guid);
                return;
           }
           else if(guidref.StartsWith("111"))
           {
               backlog.MoveToBottom(guid);
               return;
           }

           backlog.Move(guid,guidref);

        }

        public void ArrangeProgress(string guid,string guidref){

           //000 - move to Top
           //111 - move to bottom
           if(guidref.StartsWith("000"))
           {
                progress.MoveItemToTop(guid);
                return;
           }
           else if(guidref.StartsWith("111"))
           {
               progress.MoveToBottom(guid);
               return;
           }

           progress.Move(guid,guidref);
        }


    }
}