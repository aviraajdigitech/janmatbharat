import React from 'react';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center font-sans px-4 py-16">
          <div className="max-w-2xl w-full text-center bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
              <AlertOctagon size={40} className="text-red-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 relative z-10">
              Something went wrong
            </h1>
            
            <p className="text-slate-500 font-medium mb-4 leading-relaxed relative z-10">
              We encountered an unexpected error while trying to display this page.
            </p>

            {/* Display the exact error message for debugging */}
            <div className="bg-slate-900 text-left p-4 rounded-xl mb-8 overflow-auto max-h-48 text-xs text-red-400 font-mono relative z-10">
              <p className="font-bold mb-2">Error Details:</p>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <RefreshCw size={18} /> Reload Page
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl transition-all shadow-sm hover:shadow"
              >
                <Home size={18} /> Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}
