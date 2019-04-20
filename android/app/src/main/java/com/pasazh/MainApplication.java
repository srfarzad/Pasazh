package com.pasazh;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.lottie.LottiePackage;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.sbugert.rnadmob.RNAdMobPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import io.invertase.firebase.auth.RNFirebaseAuthPackage; // <-- Add this line
import android.content.Context;
import io.invertase.firebase.admob.RNFirebaseAdMobPackage; // <-- Add this line


public class MainApplication extends Application implements ReactApplication {

  @Override
  protected void attachBaseContext(Context base) {
    super.attachBaseContext(base);
    //MultiDex.install(this);
  }


  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new LottiePackage(),
            new RNAdMobPackage(),
            new RNFirebasePackage(),
            new RNGestureHandlerPackage(),
            new RNFirebaseAuthPackage() // <-- Add this line

      ,new RNFirebaseAdMobPackage() // <-- Add this line


      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
