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
    }
}