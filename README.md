# Práctica para curso avanzado de Angular

ALUMNO: JESUS FERNANDEZ JODAR

## Requerimientos funcionales

Explorar la información abierta y disponible en el [API del Banco Mundial](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures).


### Home page

- Ver regiones geográficas continentales: :heavy_check_mark:

- A partir de : http://api.worldbank.org/v2/region/?format=json :heavy_check_mark:

- Filtrando para ver aquellas que tengan `id` numérico :heavy_check_mark:

- Navegar hacia la página de una región: `region/:code` :heavy_check_mark:

### Página para una región continental

- Ver los datos básicos del continente y los países pertenecientes. :heavy_check_mark:

- A partir de : http://api.worldbank.org/v2/region/ECS/country?per_page=1000&format=json :heavy_check_mark:

- Navegar hacia la página de un país: `country/:id` :heavy_check_mark:

### Página para un país

- Ver los datos básicos de un país :heavy_check_mark:

- A partir de : http://api.worldbank.org/V2/country/ESP?format=json :heavy_check_mark:

- Navegar hacia su región continental : `region/:code` :heavy_check_mark:

---

## Requerimientos NO funcionales

## Mínimo

- Mono repositorio generado con las herramientas de [Nx.dev](https://nx.dev/angular) :heavy_check_mark:

- AL menos una aplicación y una librería :heavy_check_mark:

- Testing unitario de al menos un componente y un servicio :heavy_check_mark:

- Testing _e2e_ de una página

- Uso de la estrategia de detección de cambios **_OnPush_**.

- Uso del patrón _Container Presenter_.

## Plus

- Almacén centralizado del estado mediante **_NgRx_**.

- Características **_PWA_**

- Traducible

## Extra

- Una landing page _SEO friendly_ generada con **_SSR_** que muestre la lista de continentes.

- Un _**WebComponent**_ con datos de un según su código. `<wbde-country id="ESP"></wbde-country>`

- Una aplicación web estándar (sin Angular) que use el anterior componente.

