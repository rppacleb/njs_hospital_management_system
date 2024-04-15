// utils/db.js
const DB_NAME = "hms_app_db";
const DB_VERSION = 1;
const STORE_NAME = ["tbl_users", "tbl_hospitals"];

export default class DB {
  constructor() {
    this.idb = () => {
      if (typeof window === "undefined") {
        return Promise.reject("IndexedDB SSR error");
      }

      return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
          reject("Database error: " + event.target.errorCode);
        };

        request.onsuccess = (event) => {
          this.db = event.target.result;
          resolve(event.target.result);
        };

        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          STORE_NAME.map((tbl) => {
            if (!db.objectStoreNames.contains(tbl)) {
              db.createObjectStore(tbl, { key: "id", autoIncrement: true });
            }
          });
        };
      });
    };

    this.idb();
  }

  create(__TBL, data) {
    return new Promise((resolve, reject) => {
      this.idb().then((db) => {
        const transaction = db.transaction(__TBL, "readwrite");
        const store = transaction.objectStore(__TBL);
        const request = store.add(data);

        request.onsuccess = (event) => {
          resolve(event.target.result);
        };

        request.onerror = (event) => {
          reject("Error adding data: " + event.target.error);
        };
      });
    });
  }

  read(__TBL, id) {
    return new Promise((resolve, reject) => {
      this.idb().then((db) => {
        const transaction = db.transaction(__TBL, "readonly");
        const store = transaction.objectStore(__TBL);
        const request = store.get(id);

        request.onsuccess = (event) => {
          resolve(event.target.result);
        };

        request.onerror = (event) => {
          reject("Error getting data: " + event.target.error);
        };
      });
    });
  }

  update(__TBL, id, newData) {
    return new Promise((resolve, reject) => {
      this.idb().then((db) => {
        const transaction = db.transaction(__TBL, "readwrite");
        const store = transaction.objectStore(__TBL);

        // Get the existing record
        const getRequest = store.get(id);

        getRequest.onsuccess = (event) => {
          const existingData = event.target.result;

          if (existingData) {
            // Update the existing record with the new data
            const updatedData = { ...existingData, ...newData };
            const putRequest = store.put(updatedData);

            putRequest.onsuccess = (event) => {
              resolve(event.target.result);
            };

            putRequest.onerror = (event) => {
              reject("Error updating data: " + event.target.error);
            };
          } else {
            reject("Record not found");
          }
        };

        getRequest.onerror = (event) => {
          reject("Error getting data: " + event.target.error);
        };
      });
    });
  }

  delete(__TBL, id) {
    return new Promise((resolve, reject) => {
      this.idb().then((db) => {
        const transaction = db.transaction(__TBL, "readwrite");
        const store = transaction.objectStore(__TBL);
        const request = store.delete(id);

        request.onsuccess = (event) => {
          resolve();
        };

        request.onerror = (event) => {
          reject("Error deleting data: " + event.target.error);
        };
      });
    });
  }
}

export const __LOCALDB = new DB();