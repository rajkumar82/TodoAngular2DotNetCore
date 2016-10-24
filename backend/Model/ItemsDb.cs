using System.Collections.Generic;
using System.IO;
using System.Text;


namespace backend.model{
        public class ItemsDb{
        string _filePath;

        public ItemsDb(string filePath){
            this._filePath = filePath;
            itemList = new List<TodoItem>();
            Read();
        }

        List<TodoItem> itemList;

        public IEnumerable<TodoItem> Items{
            get{
                return itemList;
            }
        }
        public void AddItem(TodoItem item){
            this.itemList.Add(item);
            Write();
        }

        public TodoItem GetItem(string guid){
            foreach(var item in itemList)
            {
                if(item.Guid == guid)
                return item;
            }
            return null;
        }

        public void MoveItemToTop(string guid){

            var item = GetItem(guid);
            if(item == null) return;

            itemList.Insert(0,item);
            itemList.Remove(item);
            Write();
        }

        public void MoveToBottom(string guid)
        {
            var item = GetItem(guid);
            if(item == null) return;

            itemList.Add(item);
            itemList.Remove(item);
            Write();
        }

        public void Move(string guid,string before)
        {
            var item = GetItem(guid);
            if(item == null) return;

            var bef = GetItem(before);
            if(bef == null) return;

            itemList.Remove(item);
            var ind = itemList.IndexOf(bef);
            itemList.Insert(ind-1,item);
        }

        public void Remove(string guid)
        {
            var item = GetItem(guid);
            if(item == null) return;    
            itemList.Remove(item);
            Write();
        }


        private void Read(){

            if(itemList.Count ==0){

                var lines = File.ReadAllLines(_filePath,UTF8Encoding.UTF8);
                var items = new List<TodoItem>();

                foreach(var line in lines){
                    var cols = line.Split('|');
                    
                    var item = new TodoItem();
                    
                    item.Guid = cols[0];        
                    item.Desc = cols[1];
                    item.CreationTime = cols[2];
                    item.CompletionTime = cols[3];

                    itemList.Add(item);
                }
            }    
        }
        private void Write(){
            
            StringBuilder sb = new StringBuilder();
            foreach(var item in itemList){
                sb.Append(item.Guid);        sb.Append('|');
                sb.Append(item.Desc);        sb.Append('|');
                sb.Append(item.CreationTime);sb.Append('|');
                sb.Append(item.CompletionTime);
                sb.Append(System.Environment.NewLine);        
            }

            File.WriteAllText(_filePath,sb.ToString(),UTF8Encoding.UTF8);
        }


        }

}