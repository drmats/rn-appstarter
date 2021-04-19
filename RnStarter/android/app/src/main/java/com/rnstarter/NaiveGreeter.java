package com.rnstarter;

import android.util.Log;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import java.util.Map;
import java.util.HashMap;

public class NaiveGreeter extends ReactContextBaseJavaModule {
    NaiveGreeter(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "NaiveGreeter";
    }

    @ReactMethod
    public void greet(String nick, Promise promise) {
        Log.d("NaiveGreeter", "Greeting " + nick + ".");
        promise.resolve("Hello, " + nick + "!");
    }
}
