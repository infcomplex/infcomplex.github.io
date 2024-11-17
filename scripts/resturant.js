    let mainpages = document.querySelectorAll(".mainarticle");

    function testFunction()
    {
        alert(mainpages.length);
    }

    function makeSteakVisible()
    {
        makeVisible("steak");
    }

    function makeSpecialsVisible()
    {
        makeVisible("specials");
    }

    function makeLobsterVisible()
    {
        makeVisible("steaks");
    }


    function makeVisible(toBeChanged)
    {
        var refToBeChanged = document.getElementById(toBeChanged)
        for (celement of mainpages)
        {
            if (refToBeChanged == celement)
                {
                    celement.style.display = "flex";
                }
                else {
                    celement.style.display = "none";
                } 
        }
    }
