using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SPA_NetCore_ng4.Controllers
{
    public class ComponentsController : Controller
    {
        public IActionResult Navigation()
        {
            return PartialView();
        }


        public IActionResult App()
        {
            return PartialView();
        }

        public IActionResult ItemList()
        {
            return PartialView();
        }

        public IActionResult AddItem()
        {
            return PartialView();
        }
    }
}