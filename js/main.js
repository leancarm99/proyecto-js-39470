class Producto {
    constructor(tipo, codigo, precio) {
      this.tipo = tipo;
      this.codigo = codigo;
      this.precio = precio;
    }
  }
  
  const carrito = [];
  let descuento = 0;
  
  const productos = [
    new Producto("Jamón Cocido Tapalque", 1,500),
    new Producto("Jamón Natural Bocatti", 2,200),
    new Producto("Jamón Crudo Artesano", 3,300),
    new Producto("Bondiola Cagnoli", 4,400),
    new Producto("Lomito Horneado Cagnoli", 5,600),
    new Producto("Panceta Ahumada Tapalque", 6,700),
    new Producto("Panceta Salada Tapalque", 7,900),
    new Producto("Mortadela Calchaqui", 8,800),
  ];
  
  function buscarProducto(codigo) {
    return productos.find((producto) => producto.codigo === parseInt(codigo));
  }
  
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    alert(
      `${producto.tipo} se ha agregado al carrito.`
    );
  }
  
  function confirmarCompra() {
    class Compra {
      constructor(carrito) {
        this.carrito = carrito;
      }
      obtenerSubtotal() {
        return this.carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
      }
      obtenerDescuento(codigoDescuento) {
        if (codigoDescuento === "DESCUENTO10") {
          descuento = 10;
        } else if (codigoDescuento === "DESCUENTO20") {
          descuento = 20;
        } else {
          descuento = 0;
        }
        if (descuento > 0) {
          return this.obtenerSubtotal() * descuento / 100;
        }
        return 0;
      }
      obtenerTotal() {
        return this.obtenerSubtotal() - this.obtenerDescuento();
      }
      confirmarCompra() {
        return `¡Gracias por comprar en La era del queso!`;
      }
    }
    const shopping = new Compra(carrito);
    alert(`El costo total es de $ ${shopping.obtenerSubtotal()}.`);
    let codigoDescuento = prompt("Ingresa el código de descuento (si no tienes, deja en blanco):");
    let descuentoAplicado = shopping.obtenerDescuento(codigoDescuento);
    if (descuentoAplicado > 0) {
      alert(`Se ha aplicado un descuento del ${descuento}%.`);
    }
    alert(`El descuento es de $ ${descuentoAplicado}.`);
    alert(`El total a pagar es de $ ${shopping.obtenerTotal() - descuentoAplicado}.`);
    let respuesta = confirm("¿Deseas confirmar tu pago?");
    if (respuesta) {
      alert(shopping.confirmarCompra());
      carrito.length = 0;
      descuento = 0;
    }
  }
  
  function finalizarCompra() {
    if (carrito.length === 0) {
      console.warn("El carrito está vacío!");
      return;
    }
    confirmarCompra();
  }
  
  function verCarrito() {
    if (carrito.length > 0) {
        console.table(carrito);
        let subtotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        alert(`El subtotal es de $${subtotal}.`);
        } else {
        console.warn("El carrito está vacío!");
        }
        }
        function comprar() {
        let codigo = prompt("Selecciona numero de producto:");
        let productoElegido = buscarProducto(codigo);
        if (productoElegido === undefined) {
        alert("El codigo ingresado en invalido.");
        return;
        }
        agregarAlCarrito(productoElegido);
        let respuesta = confirm("¿Deseas comprar otra cosa?");
        if (respuesta) {
        comprar();
        } else {
        finalizarCompra();
        }
        }