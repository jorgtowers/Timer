(function (namespace) {
    //Constructor    
    function Timer() {
        this.Constructor();
    }
    // Variables
    var intervalo = Timer.prototype;
	var activo = Timer.prototype;

    // Métodos
    Timer.prototype.Constructor = function () {
		this.intervalo = 0;
		this.activo = false;
    }
	Timer.prototype.Tick = function (callback) {
		var seft=this;
		setInterval(
			function(){
				if(seft.Activo)
				{
					if(typeof callback === 'function') {
						callback();
					}					
				}
			}, seft.Intervalo/1000);
    }
    
    //Propiedades
    Object.defineProperty(Timer.prototype, "Intervalo", {
        get: function Intervalo() {
            return intervalo;
        },
        set: function Intervalo(value) {
            intervalo = value;
        }
    });
	 Object.defineProperty(Timer.prototype, "Activo", {
        get: function Activo() {
            return activo;
        },
        set: function Activo(value) {
            activo = value;
        }
    });

    namespace.Timer = Timer;
} (window));

