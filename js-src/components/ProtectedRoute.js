const _jsxFileName = "src/components/ProtectedRoute.tsx";import { useEffect, useState } from "react";
import { supabase } from "../util/supabaseClient";

import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

  }, []);

  if (loading) return React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}, "Loading...");

  if (!session) {
    return React.createElement(Navigate, { to: "/", replace: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}})
  }

  return children;
};

export default ProtectedRoute;
