package com.backend.config;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

public class MongoConfig {
    public static void main(String[] args) {

//    MongoClientURI uri = new MongoClientURI("mongodb://kai:12345@localhost:27017/admin");
//    MongoClient mongoClient = new MongoClient(uri);
        MongoClient mongoClient = new MongoClient("localhost", 27017);
        System.out.println("---------- list databases --------------------");
        for (String t : mongoClient.listDatabaseNames()) {
            System.out.println(t);
        }


        System.out.println("---------- list collectors --------------------");
        MongoDatabase mongoDatabase = mongoClient.getDatabase("real");

        for (String t: mongoDatabase.listCollectionNames()) {
            System.out.println(t);
        }
        mongoClient.close();
    }

}
