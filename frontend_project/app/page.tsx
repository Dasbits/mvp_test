'use client';

import React, { JSX, useState } from 'react';
import { Book, Code, Play, ChevronRight, Search, Menu, X, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';

interface CodeStep {
  explanation: string;
  code: string;
  output?: string;
}

interface Topic {
  title: string;
  icon: string;
  introduction: string;
  theory: string[];
  steps: CodeStep[];
  commonMistakes?: string[];
  tips?: string[];
  exercises?: string[];
}

interface Topics {
  [key: string]: Topic;
}

export default function PythonDocumentation(): JSX.Element {
  const [selectedTopic, setSelectedTopic] = useState<string>('intro');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const topics: Topics = {
    intro: {
      title: 'Introducción a Python',
      icon: '🐍',
      introduction: 'Python es uno de los lenguajes de programación más populares del mundo. Fue creado por Guido van Rossum en 1991 y se caracteriza por su simplicidad y legibilidad.',
      theory: [
        'Python es un lenguaje interpretado: no necesitas compilar tu código, se ejecuta línea por línea.',
        'Es de tipado dinámico: no necesitas declarar el tipo de las variables explícitamente.',
        'La indentación (espacios al inicio de línea) es parte de la sintaxis, lo que hace el código más legible.',
        'Es multiplataforma: funciona en Windows, Mac, Linux y más.'
      ],
      steps: [
        {
          explanation: 'Paso 1: Tu primer programa en Python. La función print() muestra texto en la consola. Las comillas simples (\') o dobles (") sirven para definir texto.',
          code: `print("¡Hola, Mundo!")`,
          output: '¡Hola, Mundo!'
        },
        {
          explanation: 'Paso 2: Usando variables. Una variable es como una caja donde guardas información. Python automáticamente detecta que "Python" es texto (string).',
          code: `nombre = "Python"
print(nombre)`,
          output: 'Python'
        },
        {
          explanation: 'Paso 3: Combinando variables con texto usando f-strings. La "f" antes de las comillas permite insertar variables dentro del texto usando {variable}.',
          code: `nombre = "Python"
version = 3.11
print(f"Estoy aprendiendo {nombre} versión {version}")`,
          output: 'Estoy aprendiendo Python versión 3.11'
        },
        {
          explanation: 'Paso 4: Python puede hacer cálculos matemáticos directamente. Observa cómo puedes combinar operaciones y mostrar el resultado.',
          code: `edad = 25
años_experiencia = 3
total = edad + años_experiencia
print(f"En total: {total} años")`,
          output: 'En total: 28 años'
        }
      ],
      tips: [
        'Usa nombres de variables descriptivos: "edad_usuario" es mejor que "x"',
        'Los comentarios (líneas con #) te ayudan a documentar tu código',
        'Practica escribiendo código todos los días, aunque sean 15 minutos'
      ]
    },
    variables: {
      title: 'Variables y Tipos de Datos',
      icon: '📦',
      introduction: 'Las variables son contenedores que almacenan datos. En Python, no necesitas declarar el tipo de variable - Python lo detecta automáticamente según el valor que le asignes.',
      theory: [
        'Una variable se crea cuando le asignas un valor con el operador =',
        'Python tiene varios tipos de datos básicos: números, texto, booleanos y colecciones',
        'Puedes cambiar el valor de una variable en cualquier momento',
        'Los nombres de variables deben empezar con letra o guión bajo, no con número'
      ],
      steps: [
        {
          explanation: 'Paso 1: Números enteros (int). Se usan para contar cosas, edades, cantidades sin decimales.',
          code: `edad = 25
cantidad = 100
negativo = -50
print(edad, cantidad, negativo)`,
          output: '25 100 -50'
        },
        {
          explanation: 'Paso 2: Números decimales (float). Perfectos para precios, medidas, porcentajes. Usa punto (.) no coma (,) para decimales.',
          code: `precio = 19.99
temperatura = 36.5
pi = 3.14159
print(f"Precio: €{precio}, Temp: {temperatura}°C")`,
          output: 'Precio: €19.99, Temp: 36.5°C'
        },
        {
          explanation: 'Paso 3: Texto (string). Usa comillas simples o dobles. Para texto largo usa triple comilla.',
          code: `nombre = "Ana García"
ciudad = 'Barcelona'
mensaje = """Este es un mensaje
que ocupa varias
líneas"""
print(nombre)
print(mensaje)`,
          output: `Ana García
Este es un mensaje
que ocupa varias
líneas`
        },
        {
          explanation: 'Paso 4: Booleanos (True/False). Representan verdadero o falso. Fíjate que van con mayúscula inicial.',
          code: `es_mayor_edad = True
tiene_descuento = False
print(f"Mayor de edad: {es_mayor_edad}")
print(f"Tiene descuento: {tiene_descuento}")`,
          output: `Mayor de edad: True
Tiene descuento: False`
        },
        {
          explanation: 'Paso 5: Listas (arrays). Colecciones ordenadas de elementos. Se definen con corchetes [ ]. Pueden contener diferentes tipos de datos.',
          code: `frutas = ["manzana", "banana", "naranja"]
numeros = [1, 2, 3, 4, 5]
mixto = ["Python", 3.11, True, 42]
print(frutas)
print(f"Primera fruta: {frutas[0]}")`,
          output: `['manzana', 'banana', 'naranja']
Primera fruta: manzana`
        },
        {
          explanation: 'Paso 6: Diccionarios (dict). Pares clave-valor. Como una agenda: cada nombre (clave) tiene asociado un dato (valor).',
          code: `persona = {
    "nombre": "Carlos",
    "edad": 28,
    "ciudad": "Madrid"
}
print(persona["nombre"])
print(f"{persona['nombre']} tiene {persona['edad']} años")`,
          output: `Carlos
Carlos tiene 28 años`
        }
      ],
      commonMistakes: [
        'Usar coma (,) en vez de punto (.) para decimales: 3,14 ❌  →  3.14 ✅',
        'Olvidar las comillas en strings: nombre = Ana ❌  →  nombre = "Ana" ✅',
        'Usar True/False en minúsculas: es_verdad = true ❌  →  es_verdad = True ✅'
      ],
      tips: [
        'Usa type(variable) para ver el tipo de dato: type(edad) devuelve <class \'int\'>',
        'Puedes convertir tipos: int("10") convierte texto a número',
        'Las listas empiezan en índice 0: el primer elemento es lista[0]'
      ],
      exercises: [
        'Crea una variable con tu edad y multiplícala por 365 para calcular días vividos',
        'Crea un diccionario con tus datos personales (nombre, ciudad, hobby favorito)',
        'Crea una lista con tus 5 películas favoritas y muestra la primera y última'
      ]
    },
    control: {
      title: 'Estructuras de Control',
      icon: '🔀',
      introduction: 'Las estructuras de control permiten que tu programa tome decisiones (if/else) y repita acciones (bucles). Son fundamentales para crear programas inteligentes.',
      theory: [
        'Los condicionales (if/elif/else) ejecutan código solo si se cumple una condición',
        'Los bucles (for/while) repiten código múltiples veces',
        'La indentación (4 espacios) define qué código pertenece a cada bloque',
        'Puedes comparar valores con: == (igual), != (diferente), >, <, >=, <='
      ],
      steps: [
        {
          explanation: 'Paso 1: If básico. La condición se evalúa: si es True, ejecuta el código indentado. Nota: dos puntos (:) y espacios son obligatorios.',
          code: `edad = 20

if edad >= 18:
    print("Eres mayor de edad")
    print("Puedes votar")`,
          output: `Eres mayor de edad
Puedes votar`
        },
        {
          explanation: 'Paso 2: If-else. Si la condición es False, ejecuta el bloque else. Solo uno de los dos bloques se ejecuta.',
          code: `edad = 15

if edad >= 18:
    print("Puedes entrar al club")
else:
    print("Lo siento, eres menor de edad")
    print("Vuelve cuando seas mayor")`,
          output: `Lo siento, eres menor de edad
Vuelve cuando seas mayor`
        },
        {
          explanation: 'Paso 3: If-elif-else. Para múltiples condiciones. Python evalúa en orden y ejecuta solo el primer bloque que sea True.',
          code: `nota = 85

if nota >= 90:
    print("Sobresaliente! 🌟")
elif nota >= 70:
    print("Notable! 👍")
elif nota >= 50:
    print("Aprobado ✓")
else:
    print("Suspenso ✗")`,
          output: 'Notable! 👍'
        },
        {
          explanation: 'Paso 4: Bucle for con range(). range(5) genera números del 0 al 4. Perfecto para repetir algo N veces.',
          code: `# Contar del 0 al 4
for i in range(5):
    print(f"Número: {i}")`,
          output: `Número: 0
Número: 1
Número: 2
Número: 3
Número: 4`
        },
        {
          explanation: 'Paso 5: Bucle for con listas. Recorre cada elemento de la lista automáticamente. Muy útil para procesar datos.',
          code: `frutas = ["manzana", "banana", "naranja"]

for fruta in frutas:
    print(f"Me gusta la {fruta}")`,
          output: `Me gusta la manzana
Me gusta la banana
Me gusta la naranja`
        },
        {
          explanation: 'Paso 6: Bucle while. Se repite MIENTRAS la condición sea True. ¡Cuidado! Si la condición nunca es False, el bucle es infinito.',
          code: `contador = 0

while contador < 3:
    print(f"Vuelta número {contador + 1}")
    contador = contador + 1  # Incrementar

print("Bucle terminado")`,
          output: `Vuelta número 1
Vuelta número 2
Vuelta número 3
Bucle terminado`
        },
        {
          explanation: 'Paso 7: Combinando todo. If dentro de un for. Podemos filtrar elementos según una condición.',
          code: `numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for num in numeros:
    if num % 2 == 0:  # Si es divisible por 2
        print(f"{num} es par")`,
          output: `2 es par
4 es par
6 es par
8 es par
10 es par`
        }
      ],
      commonMistakes: [
        'Olvidar los dos puntos (:) después del if: if edad > 18 ❌ → if edad > 18: ✅',
        'No indentar correctamente: el código debe tener 4 espacios o una tabulación',
        'Usar = en vez de == para comparar: if edad = 18 ❌ → if edad == 18 ✅',
        'Bucle infinito: olvidar incrementar el contador en while'
      ],
      tips: [
        'range(1, 11) genera números del 1 al 10 (el último no se incluye)',
        'Usa "in" para verificar si algo está en una lista: if "manzana" in frutas:',
        'break: sale del bucle inmediatamente | continue: salta a la siguiente iteración'
      ],
      exercises: [
        'Escribe un programa que imprima números del 1 al 10',
        'Crea un programa que diga si un número es positivo, negativo o cero',
        'Haz un bucle que sume todos los números del 1 al 100 y muestre el resultado'
      ]
    },
    funciones: {
      title: 'Funciones',
      icon: '⚡',
      introduction: 'Las funciones son bloques de código reutilizables. En vez de escribir el mismo código varias veces, lo envuelves en una función y la llamas cuando la necesites.',
      theory: [
        'Se definen con la palabra clave "def" seguida del nombre y paréntesis',
        'Pueden recibir parámetros (datos de entrada) y retornar valores (datos de salida)',
        'Hacen tu código más organizado, legible y fácil de mantener',
        'Una vez definida, puedes usar la función tantas veces como quieras'
      ],
      steps: [
        {
          explanation: 'Paso 1: Función sin parámetros. Se define una vez y se puede ejecutar muchas veces llamándola con ().',
          code: `def saludar():
    print("¡Hola!")
    print("Bienvenido a Python")

# Llamar la función 3 veces
saludar()
saludar()
saludar()`,
          output: `¡Hola!
Bienvenido a Python
¡Hola!
Bienvenido a Python
¡Hola!
Bienvenido a Python`
        },
        {
          explanation: 'Paso 2: Función con parámetros. Los parámetros son variables que recibe la función. Hacen la función flexible y reutilizable.',
          code: `def saludar_persona(nombre):
    print(f"¡Hola, {nombre}!")
    print(f"Encantado de conocerte, {nombre}")

saludar_persona("Ana")
saludar_persona("Carlos")`,
          output: `¡Hola, Ana!
Encantado de conocerte, Ana
¡Hola, Carlos!
Encantado de conocerte, Carlos`
        },
        {
          explanation: 'Paso 3: Función con return. En vez de solo imprimir, devuelve un valor que puedes guardar en una variable o usar en operaciones.',
          code: `def sumar(a, b):
    resultado = a + b
    return resultado

# Usar el valor retornado
total = sumar(5, 3)
print(f"5 + 3 = {total}")

# O usarlo directamente
print(f"10 + 20 = {sumar(10, 20)}")`,
          output: `5 + 3 = 8
10 + 20 = 30`
        },
        {
          explanation: 'Paso 4: Parámetros con valores por defecto. Si no pasas un valor, usa el valor por defecto. Útil para parámetros opcionales.',
          code: `def crear_perfil(nombre, edad=18, ciudad="Madrid"):
    return f"{nombre}, {edad} años, vive en {ciudad}"

# Usando valores por defecto
print(crear_perfil("Juan"))

# Sobrescribiendo valores por defecto
print(crear_perfil("Ana", 25, "Barcelona"))

# Solo sobrescribir algunos
print(crear_perfil("Luis", ciudad="Valencia"))`,
          output: `Juan, 18 años, vive en Madrid
Ana, 25 años, vive en Barcelona
Luis, 18 años, vive en Valencia`
        },
        {
          explanation: 'Paso 5: Retornar múltiples valores. Python permite retornar varios valores como una tupla. Se separan por comas.',
          code: `def calcular(a, b):
    suma = a + b
    resta = a - b
    multiplicacion = a * b
    return suma, resta, multiplicacion

# Recibir todos los valores
s, r, m = calcular(10, 5)
print(f"Suma: {s}")
print(f"Resta: {r}")
print(f"Multiplicación: {m}")`,
          output: `Suma: 15
Resta: 5
Multiplicación: 50`
        },
        {
          explanation: 'Paso 6: Funciones prácticas del día a día. Ejemplo de validación de email y cálculo de descuento.',
          code: `def aplicar_descuento(precio, descuento_porcentaje):
    descuento = precio * (descuento_porcentaje / 100)
    precio_final = precio - descuento
    return precio_final

def es_email_valido(email):
    # Verificación simple
    return "@" in email and "." in email

# Usar las funciones
precio_con_descuento = aplicar_descuento(100, 20)
print(f"Precio con 20% descuento: €{precio_con_descuento}")

email = "usuario@ejemplo.com"
if es_email_valido(email):
    print(f"'{email}' es válido ✓")`,
          output: `Precio con 20% descuento: €80.0
'usuario@ejemplo.com' es válido ✓`
        }
      ],
      commonMistakes: [
        'Olvidar los paréntesis al llamar: saludar en vez de saludar()',
        'Olvidar el return: la función hace cálculos pero no devuelve nada',
        'Confundir print con return: print solo muestra, return devuelve el valor'
      ],
      tips: [
        'Usa nombres descriptivos: calcular_iva() es mejor que calc()',
        'Una función debe hacer UNA cosa bien. Si hace mucho, divídela',
        'Documenta funciones complejas con comentarios explicativos'
      ],
      exercises: [
        'Crea una función que reciba un número y devuelva si es par o impar',
        'Haz una función que calcule el área de un círculo (π * radio²)',
        'Crea una función que reciba una lista de números y devuelva el promedio'
      ]
    },
    listas: {
      title: 'Listas y Métodos',
      icon: '📝',
      introduction: 'Las listas son colecciones ordenadas y modificables de elementos. Son como cajas donde puedes guardar múltiples valores y manipularlos fácilmente.',
      theory: [
        'Se crean con corchetes [ ] y elementos separados por comas',
        'Pueden contener cualquier tipo de dato, incluso mezclar tipos diferentes',
        'Los índices empiezan en 0: primer elemento = lista[0]',
        'Son mutables: puedes cambiar, añadir o eliminar elementos después de crearla'
      ],
      steps: [
        {
          explanation: 'Paso 1: Crear y acceder a listas. Los índices empiezan en 0. Los índices negativos cuentan desde el final: -1 es el último elemento.',
          code: `frutas = ["manzana", "banana", "naranja", "pera"]

# Acceder por índice
print(f"Primera fruta: {frutas[0]}")
print(f"Segunda fruta: {frutas[1]}")
print(f"Última fruta: {frutas[-1]}")
print(f"Penúltima: {frutas[-2]}")`,
          output: `Primera fruta: manzana
Segunda fruta: banana
Última fruta: pera
Penúltima: naranja`
        },
        {
          explanation: 'Paso 2: Slicing (rebanado). Obtén una porción de la lista. Sintaxis: lista[inicio:fin]. El fin NO se incluye.',
          code: `numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Ejemplos de slicing
print(f"Del 2 al 5: {numeros[2:6]}")
print(f"Primeros 4: {numeros[:4]}")
print(f"Desde el 5: {numeros[5:]}")
print(f"Cada 2: {numeros[::2]}")
print(f"Invertida: {numeros[::-1]}")`,
          output: `Del 2 al 5: [2, 3, 4, 5]
Primeros 4: [0, 1, 2, 3]
Desde el 5: [5, 6, 7, 8, 9]
Cada 2: [0, 2, 4, 6, 8]
Invertida: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]`
        },
        {
          explanation: 'Paso 3: Añadir elementos. append() añade AL FINAL. insert() añade en una posición específica.',
          code: `tareas = ["estudiar", "cocinar"]
print(f"Inicial: {tareas}")

# Añadir al final
tareas.append("hacer ejercicio")
print(f"Después de append: {tareas}")

# Insertar en posición 1
tareas.insert(1, "leer")
print(f"Después de insert: {tareas}")`,
          output: `Inicial: ['estudiar', 'cocinar']
Después de append: ['estudiar', 'cocinar', 'hacer ejercicio']
Después de insert: ['estudiar', 'leer', 'cocinar', 'hacer ejercicio']`
        },
        {
          explanation: 'Paso 4: Eliminar elementos. remove() elimina por valor. pop() elimina por posición y devuelve el elemento.',
          code: `colores = ["rojo", "azul", "verde", "amarillo", "azul"]

# Eliminar por valor (primera aparición)
colores.remove("azul")
print(f"Después de remove: {colores}")

# Eliminar el último y guardarlo
ultimo = colores.pop()
print(f"Eliminado: {ultimo}")
print(f"Lista actual: {colores}")

# Eliminar en posición específica
eliminado = colores.pop(1)
print(f"Eliminado en pos 1: {eliminado}")
print(f"Lista final: {colores}")`,
          output: `Después de remove: ['rojo', 'verde', 'amarillo', 'azul']
Eliminado: azul
Lista actual: ['rojo', 'verde', 'amarillo']
Eliminado en pos 1: verde
Lista final: ['rojo', 'amarillo']`
        },
        {
          explanation: 'Paso 5: Ordenar y modificar. sort() ordena la lista directamente. reverse() invierte el orden.',
          code: `numeros = [5, 2, 8, 1, 9, 3]
print(f"Original: {numeros}")

# Ordenar de menor a mayor
numeros.sort()
print(f"Ordenada: {numeros}")

# Ordenar de mayor a menor
numeros.sort(reverse=True)
print(f"Descendente: {numeros}")

# Invertir el orden actual
numeros.reverse()
print(f"Invertida: {numeros}")`,
          output: `Original: [5, 2, 8, 1, 9, 3]
Ordenada: [1, 2, 3, 5, 8, 9]
Descendente: [9, 8, 5, 3, 2, 1]
Invertida: [1, 2, 3, 5, 8, 9]`
        },
        {
          explanation: 'Paso 6: Operaciones útiles. Verificar si existe, contar ocurrencias, obtener longitud, combinar listas.',
          code: `frutas = ["manzana", "banana", "manzana", "pera"]

# Verificar existencia
print(f"¿Hay banana? {'banana' in frutas}")
print(f"¿Hay uva? {'uva' in frutas}")

# Contar cuántas veces aparece
print(f"Manzanas: {frutas.count('manzana')}")

# Longitud de la lista
print(f"Total frutas: {len(frutas)}")

# Combinar listas
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]
combinada = lista1 + lista2
print(f"Combinada: {combinada}")`,
          output: `¿Hay banana? True
¿Hay uva? False
Manzanas: 2
Total frutas: 4
Combinada: [1, 2, 3, 4, 5, 6]`
        }
      ],
      commonMistakes: [
        'Confundir índice con posición: primer elemento es índice 0, no 1',
        'Index out of range: intentar acceder a lista[10] cuando solo hay 5 elementos',
        'sort() modifica la lista original, sorted() crea una nueva',
        'remove() solo elimina la PRIMERA aparición del valor'
      ],
      tips: [
        'len(lista) te da el número de elementos',
        'max(lista) y min(lista) encuentran el mayor y menor',
        'sum(lista) suma todos los números de la lista',
        'Usa list comprehension para crear listas: [x*2 for x in range(5)]'
      ],
      exercises: [
        'Crea una lista de tus 5 películas favoritas y muestra la del medio',
        'Haz una lista de números del 1 al 10 y filtra solo los pares',
        'Crea una lista de nombres y ordénala alfabéticamente'
      ]
    }
  };

  const filteredTopics: [string, Topic][] = Object.entries(topics).filter(([key, topic]) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.introduction.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentTopic: Topic = topics[selectedTopic];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="text-3xl">🐍</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Python Paso a Paso
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Book size={18} />
              <span className="hidden sm:inline">Teoría + Ejemplos</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className={`
            ${sidebarOpen ? 'block' : 'hidden'} 
            lg:block w-full lg:w-80 flex-shrink-0
          `}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-24">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Buscar tema..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
                {filteredTopics.map(([key, topic]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedTopic(key);
                      if (window.innerWidth < 1024) setSidebarOpen(false);
                    }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all
                      ${selectedTopic === key 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                        : 'hover:bg-gray-100 text-gray-700'
                      }
                    `}
                  >
                    <span className="text-2xl">{topic.icon}</span>
                    <span className="font-medium text-sm">{topic.title}</span>
                    {selectedTopic === key && <ChevronRight className="ml-auto" size={18} />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Introduction Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{currentTopic.icon}</span>
                  <h2 className="text-3xl font-bold">{currentTopic.title}</h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {currentTopic.introduction}
                </p>
              </div>

              {/* Theory Section */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="flex items-center gap-2 mb-4">
                  <Book className="text-blue-600" size={22} />
                  <h3 className="text-xl font-semibold text-gray-800">📚 Conceptos Fundamentales</h3>
                </div>
                <div className="space-y-3">
                  {currentTopic.theory.map((point: string, idx: number) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Steps Section */}
            <div className="space-y-6">
              {currentTopic.steps.map((step: CodeStep, idx: number) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Step Header */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 border-b border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 leading-relaxed font-medium">
                          {step.explanation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Code Block */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="text-purple-600" size={18} />
                      <span className="text-sm font-semibold text-gray-700">Código:</span>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100 font-mono leading-relaxed">
                        <code>{step.code}</code>
                      </pre>
                    </div>

                    {/* Output */}
                    {step.output && (
                      <div className="mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Play className="text-green-600" size={18} />
                          <span className="text-sm font-semibold text-gray-700">Resultado:</span>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <pre className="text-sm text-green-900 font-mono leading-relaxed">
                            {step.output}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Common Mistakes */}
            {currentTopic.commonMistakes && currentTopic.commonMistakes.length > 0 && (
              <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="text-red-600" size={22} />
                  <h3 className="text-xl font-semibold text-red-900">⚠️ Errores Comunes a Evitar</h3>
                </div>
                <div className="space-y-2">
                  {currentTopic.commonMistakes.map((mistake: string, idx: number) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="text-red-500 font-bold">•</span>
                      <p className="text-red-800 text-sm leading-relaxed">{mistake}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips */}
            {currentTopic.tips && currentTopic.tips.length > 0 && (
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="text-yellow-600" size={22} />
                  <h3 className="text-xl font-semibold text-yellow-900">💡 Consejos Pro</h3>
                </div>
                <div className="space-y-2">
                  {currentTopic.tips.map((tip: string, idx: number) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="text-yellow-500 font-bold">✓</span>
                      <p className="text-yellow-800 text-sm leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exercises */}
            {currentTopic.exercises && currentTopic.exercises.length > 0 && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="text-green-600" size={22} />
                  <h3 className="text-xl font-semibold text-green-900">🎯 Ejercicios para Practicar</h3>
                </div>
                <div className="space-y-3">
                  {currentTopic.exercises.map((exercise: string, idx: number) => (
                    <div key={idx} className="flex gap-3 items-start bg-white p-3 rounded-lg border border-green-200">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-green-800 text-sm leading-relaxed flex-1">{exercise}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Links */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a 
                href="https://docs.python.org/es/3/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-blue-600 font-semibold mb-1">
                  <Book size={18} />
                  <span>Docs Oficiales</span>
                </div>
                <p className="text-gray-600 text-sm">Documentación oficial en español</p>
              </a>
              
              <a 
                href="https://www.python.org/downloads/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-purple-600 font-semibold mb-1">
                  <Code size={18} />
                  <span>Descargar Python</span>
                </div>
                <p className="text-gray-600 text-sm">Última versión disponible</p>
              </a>
              
              <a 
                href="https://replit.com/languages/python3" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-green-600 font-semibold mb-1">
                  <Play size={18} />
                  <span>Practica Online</span>
                </div>
                <p className="text-gray-600 text-sm">Sin instalar nada</p>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}