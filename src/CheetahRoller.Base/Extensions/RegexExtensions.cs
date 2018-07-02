using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace CheetahRoller.Base.Extensions
{
    public static class RegexExtensions
    {
        public static IEnumerable<Group> AsEnumerable(this GroupCollection groupCollection)
        {
            var enumerator = groupCollection.GetEnumerator();
            do
            {
                yield return enumerator.Current as Group;
            } while (enumerator.MoveNext());
        }
    }
}