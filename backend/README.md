# Backend

# Pre-requisite
    Install maven 

## Run
    mvn spring-boot:run

## Clean
    mvn clean

## Clean and compile
    mvn clean compile

## Testing
    mvn test

#### Note: The mongodb url needs to be valid.
This can be found in the `src\main\resources\application.properties` path.

#### Note: 
- Collection `Roles` need to exist for a user to be registered.
-  Also, the JWT miliseconds and the sha values = 4. Adding JWT to Spring Boot App


### To resynchronize `.gitignore`
    git rm -r --cached .
    git add .
    git commit -m "Resynchronize .gitignore"


