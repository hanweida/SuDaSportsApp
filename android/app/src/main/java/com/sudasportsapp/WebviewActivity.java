package com.sudasportsapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ProgressBar;

import com.utils.X5WebView;

import java.net.URL;

/**
 * Created by jerry on 2018/5/23.
 */

public class WebviewActivity extends AppCompatActivity {
    /**
     * 作为一个浏览器的示例展示出来，采用android+web的模式
     */
    private X5WebView mWebView;
    private static final String mHomeUrl = "http://nba.tmiaoo.com";
    private static final String TAG = "SdkDemo";
    private static final int MAX_LENGTH = 14;
    private boolean mNeedTestPage = false;
    private final int disable = 120;
    private final int enable = 255;
    private ProgressBar mPageLoadingProgressBar = null;
    private URL mIntentUrl;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
		/*
		 * getWindow().addFlags(
		 * android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
		 */
        setContentView(R.layout.activity_my);
        mWebView = (X5WebView) findViewById(R.id.webView1);
        mWebView.loadUrl(getIntent().getData().toString());
        //mWebView2 = (X5WebView) findViewById(R.id.webView2);
        //mWebView2.loadUrl(getIntent().getData().toString());
    }
    @Override
    protected void onNewIntent(Intent intent) {
        if (intent == null || mWebView == null || intent.getData() == null)
            return;
        mWebView.loadUrl(intent.getData().toString());
        //mWebView2.loadUrl(intent.getData().toString());
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}