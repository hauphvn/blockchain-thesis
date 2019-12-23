jQuery(document).ready(function () {

    jQuery('.wpcf7-submit').on('click', function () {

        var run = setInterval(function () {

            var smc = smReadCookie("smclient");
            if (typeof smc !== "undefined" && smc != null) {
                //console.log("client"+smc);
                try {
                    sm('event', {name: "SMFORM [" + top.location.pathname + "]"})
                } catch (ex) {
                    //console.log(ex);
                }
                clearInterval(run);
            }

        }, 1000);
    });
});
