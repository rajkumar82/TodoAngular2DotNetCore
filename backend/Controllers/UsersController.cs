using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using backend.model;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
         [HttpGet]
        public IEnumerable<string> Get()
        {
            return UsersDb.Instance.Users;
        }

        [HttpGet("{name}")]
        public UserDb GetUser(string name)
        {
            return UsersDb.Instance.GetUser(name);
        }

        [HttpPost("{name}")]
        public bool AddUser(string name)
        {
            UsersDb.Instance.AddUser(name);
            return true;
        }
    }
}