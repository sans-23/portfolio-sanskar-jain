// import numpy as np
// #import matplotlib.pyplot as plt

function pfiner(mass_retained, total_mass){
    var cumulative_retained = []
    var percentage_finer = []

    var j=0
    mass_retained.map((e)=>{
        j+=e
        cumulative_retained.add(j)
    })

    cumulative_retained.map((e)=>{
        percentage_finer.append(100 - (e/total_mass)*100.0)
    })
    
    return percentage_finer
}
    

function util(a, target){
    if (target>a[0])
        return 100
    else if(target<a[-1])
        return -1
    
    for(var i=0; i<a.length; i++){
        if(a[i]<=target)
        return i;
    }
}

function USCS_COARSE(finer4, finer200, Cu, Cc, PI, LL, clay, dc){
    if (dc == True)
        silt = finer200 - clay

    if (finer4 > 50){
        if (finer200>=0 && finer200<=5){
            if (Cu>6 && (Cc>1 && Cc<3))
                return 'SW'
            else
                return 'SP'
        }
        else if (finer200>5 && finer200<=12){
            //#Dual Classification
            if (dc == False)
                return 'DUALS'
            else{
                if (clay > silt){
                    if (Cu>6 && (Cc>1 && Cc<3))
                        return 'SW-SC'
                    else
                        return 'SP-SC'
                }
                else{
                    if (Cu>6 && (Cc>1 && Cc<3))
                        return 'SW-SM'
                    else
                        return 'SP-SM'
                }
            }
        }
        else if (finer200>12 && finer200<50){
            if (PI > 0.73*(LL-20))
                return 'SC'
            else
                return 'SM'
        }
    }
    else{
        if (finer200>=0 && finer200<=5){
            if (Cu>4 && (Cc>1 && Cc<3))
                return 'GW'
            else
                return 'GP'
        }
        else if (finer200>5 && finer200<=12){
            //   #Dual Classification
            if (dc == False)
                return 'DUALG'
            else{
                if (clay > silt){
                    if (Cu>4 && (Cc>1 && Cc<3))
                        return 'GW-GC'
                    else
                        return 'GP-GC'
                }
                else{
                    if (Cu>4 && (Cc>1 && Cc<3))
                    return 'GW-GM'
                    else
                    return 'GP-GM'
                }
            }
        }
        else if (finer200>12 && finer200<=50){
            if (PI > 0.73*(LL-20))
                return 'GC'
            else
                return 'GM'
        }
    }
}

function USCS_FINE(PI, LL){
    if (LL>50){
        if (PI > 0.73*(LL-20))
            return 'CH'
        else
            return 'MH'
    }   
    else{
        if (PI > 0.73*(LL-20))
            return 'CL'
        else
            return 'ML'
    }
}
  

USCS_NAMES = {'SW': 'Well-graded sand',
              'SP': 'Poorly-graded sand',
              'SP-SM': 'Poorly-graded sand with silt',
              'SP-SC': 'Poorly-graded sand with clay',
              'SW-SM': 'Well-graded sand with silt',
              'SW-SC': 'Well-graded sand with clay',
              'SC': 'Clayey sand',
              'SM': 'Silty sand',
              'GW': 'Well-graded gravel',
              'GP': 'Poorly-graded gravel',
              'GP-GM': 'Poorly-graded gravel with silt',
              'GP-GC': 'Poorly-graded gravel with clay',
              'GW-GM': 'Well-graded gravel with silt',
              'GW-GC': 'Well-graded gravel with clay',
              'GC': 'Clayey gravel',
              'GM': 'Silty gravel',
              'CH': 'Fat clay',
              'MH': 'Elastic clay',
              'CL': 'Lean clay',
              'ML': 'Lean silt',
              'DUALG': 'GP-GM GP-GC GW-GM GW-GC',
              'DUALS': 'SP-SM SP-SC SW-SM SW-SC',
              'ERROR': 'Insufficient data'}

function explosans(sieve, A, LL=42, PI=18){

    for(var i=0; i<A.length-1; i++){
        if(A[i]<A[i+1])
            return {'USCS_ABBR': 'ERROR' , 'USCS_NAME': 'Bad Data'}
    }

    var dual_classification = True

    var i4   = util(sieve, 4.75)
    var i200 = util(sieve, 0.075)
    var i200 = util(sieve, 0.075)
    var iclay = util(sieve, 0.002)
    var i60  = util(A, 60)
    var i30  = util(A, 30)
    var i10  = util(A, 10)
    var finer4 = 0
    var finer200 = 0
    var clay = 0

    if (sieve[0] == 4.75)
        finer4 = A[0]
    else{
        finer4   = i4==100 ? 100 : np.interp(4.75, np.flipud(sieve.subarray(i4-1,i4+1)), np.flipud(A.subarray(i4-1, i4+1)))
        finer200 = i200==100 ? 100 : np.interp(0.075, np.flipud(sieve.subarray(i200-1,i200+1)), np.flipud(A.subarray(i200-1, i200+1)))
        clay     = iclay==-1 ? -1 : np.interp(0.002, np.flipud(sieve.subarray(iclay-1,iclay+1)), np.flipud(A.subarray(iclay-1, iclay+1)))
    }
    if (clay == -1)
        dual_classification = False

    if (finer200 >= 50){
        var abbr = USCS_FINE(PI, LL)
        return {'USCS_ABBR': abbr , 'USCS_NAME': USCS_NAMES[abbr]}
    }
    else{
        var retained200 = 100 - finer200 //total coarse soil
        var retained4 = 100 - finer4 //total gravel

        var percentage_gravel = (retained4/retained200)*100
        finer4 = percentage_gravel

        try{
            var D60 = np.interp(60, np.flipud(A.subarray(i60-1,i60+1)), np.flipud(sieve.subarray(i60-1, i60+1)))
            var D30 = np.interp(30, np.flipud(A.subarray(i30-1,i30+1)), np.flipud(sieve.subarray(i30-1, i30+1)))
            var D10 = np.interp(10, np.flipud(A.subarray(i10-1,i10+1)), np.flipud(sieve.subarray(i10-1, i10+1)))
            var Cu  = D60/D10
            var Cc  = (D30*D30)/(D10*D60)
            var abbr = USCS_COARSE(finer4, finer200, Cu, Cc, PI, LL, clay, dual_classification)
            return {'USCS_ABBR': abbr , 'USCS_NAME': USCS_NAMES[abbr], 'Cu':Cu, 'Cc':Cc}
        }
        catch(e){
            return {'USCS_ABBR': 'ERROR' , 'USCS_NAME': 'Insufficient data'}
        }
        
    }
}

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof global?r=global:"undefined"!=typeof self&&(r=self),r.everpolate=e()}}(function(){return function e(r,t,n){function o(i,u){if(!t[i]){if(!r[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(f)return f(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[i]={exports:{}};r[i][0].call(l.exports,function(e){var t=r[i][1][e];return o(t?t:e)},l,l.exports,e,r,t,n)}return t[i].exports}for(var f="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,r){"use strict";r.exports.polynomial=e("./polynomial.js"),r.exports.linear=e("./linear.js"),r.exports.linearRegression=e("./linearRegression.js"),r.exports.step=e("./step.js")},{"./linear.js":3,"./linearRegression.js":4,"./polynomial.js":5,"./step.js":6}],2:[function(e,r){"use strict";r.exports.makeItArrayIfItsNot=function(e){return"[object Array]"!==Object.prototype.toString.call(e)?[e]:e},r.exports.findIntervalLeftBorderIndex=function(e,r){if(e<r[0])return 0;if(e>r[r.length-1])return r.length-1;for(var t=0,n=r.length-1;n-t!==1;){var o=t+Math.floor((n-t)/2);e>=r[o]?t=o:n=o}return t}},{}],3:[function(e,r){"use strict";function t(e,r,t){var f=[];return e=o.makeItArrayIfItsNot(e),e.forEach(function(e){var i=o.findIntervalLeftBorderIndex(e,r);i==r.length-1&&i--,f.push(n(e,r[i],t[i],r[i+1],t[i+1]))}),f}function n(e,r,t,n,o){var f=(o-t)/(n-r),i=-f*r+t;return f*e+i}var o=e("./help");r.exports=t},{"./help":2}],4:[function(e,r){"use strict";function t(e,r){for(var t={},o=e,f=r,i=f.length,u=0,s=0,a=0,l=0,p=0,c=0;c<f.length;c++)u+=o[c],s+=f[c],a+=o[c]*f[c],l+=o[c]*o[c],p+=f[c]*f[c];return t.slope=(i*a-u*s)/(i*l-u*u),t.intercept=(s-t.slope*u)/i,t.rSquared=Math.pow((i*a-u*s)/Math.sqrt((i*l-u*u)*(i*p-s*s)),2),t.evaluate=function(e){var r=n.makeItArrayIfItsNot(e),t=[],o=this;return r.forEach(function(e){t.push(o.slope*e+o.intercept)}),t},t}r.exports=t;var n=e("./help")},{"./help":2}],5:[function(e,r){"use strict";function t(e,r,t){var f=[];return e=o.makeItArrayIfItsNot(e),e.forEach(function(e){f.push(n(e,r,t))}),f}function n(e,r,t){for(var n=[t],o=1;o<r.length;o++){n.push([]);for(var f=1;o>=f;f++)n[f][o]=((e-r[o-f])*n[f-1][o]-(e-r[o])*n[f-1][o-1])/(r[o]-r[o-f])}return n[f-1][o-1]}var o=e("./help");r.exports=t},{"./help":2}],6:[function(e,r){"use strict";function t(e,r,t){var o=[];return e=n.makeItArrayIfItsNot(e),e.forEach(function(e){o.push(t[n.findIntervalLeftBorderIndex(e,r)])}),o}var n=e("./help");r.exports=t},{"./help":2}]},{},[1])(1)});