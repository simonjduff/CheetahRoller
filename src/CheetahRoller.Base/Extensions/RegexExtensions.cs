using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace CheetahRoller.Base.Extensions
{
    public static class RegexExtensions
    {
        public static IList<Match> ToList(this MatchCollection matchCollection)
        {
            if (matchCollection.Count == 0)
            {
                return new List<Match>();
            }

            List<Match> matches = new List<Match>(matchCollection.Count);

            foreach (var match in matchCollection)
            {
                matches.Add(match as Match);
            }

            return matches;
        }
    }
}