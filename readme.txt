***
Supported browsers:
Chrome 
IE9+ 

Any others not listed here but have implemented the Navigation Spec will work too
***

To install disabled by default

Add this to <head> in any page you want tracked:

  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
  <script type="text/javascript" src="http://your.domain.com/Scripts/ClientTiming.js"></script>

Then to enable, browse to your page and add "enableCST=1" to the URL.




To install enabled by default:

Add this to <head> in any page you want tracked:

  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
  <script type="text/javascript" src="http://your.domain.com/Scripts/ClientTiming.js" cst_enabledByDefault></script>


